import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import content from '../data/content.json';

export const generateResume = async () => {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595, 842]); // A4 size
  let { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
  let currentY = height - 40;
  const margin = 50;
  let currentPage = 1;

  // Spacing constants
  const SECTION_SPACING = 25;
  const LINE_SPACING = 14;
  const BULLET_SPACING = 12;
  const MIN_SPACE_FOR_SECTION = 120;

  const drawFooter = (pageNum: number) => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { 
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).toUpperCase();
    
    // Draw date on the left
    drawText(formattedDate, margin, 25, { 
      size: 8, 
      color: rgb(0.5, 0.5, 0.5) 
    });

    // Draw page number on the right
    const pageText = `${pageNum}`;
    const pageWidth = font.widthOfTextAtSize(pageText, 8);
    drawText(pageText, width - margin - pageWidth, 25, { 
      size: 8, 
      color: rgb(0.5, 0.5, 0.5) 
    });
  };

  const checkAndAddNewPage = () => {
    if (currentY < MIN_SPACE_FOR_SECTION) {
      drawFooter(currentPage);
      page = pdfDoc.addPage([595, 842]);
      currentY = height - 40;
      currentPage++;
      return true;
    }
    return false;
  };

  const wrapText = (text: string, maxWidth: number, fontSize: number, currentFont: typeof font) => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = currentFont.widthOfTextAtSize(currentLine + ' ' + word, fontSize);
      
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const drawText = (text: string, x: number, y: number, options: any = {}) => {
    const defaultOptions = {
      size: 9,
      font,
      color: rgb(0, 0, 0),
      maxWidth: width - x - margin,
    };
    const mergedOptions = { ...defaultOptions, ...options };
    
    if (mergedOptions.maxWidth) {
      const lines = wrapText(text, mergedOptions.maxWidth, mergedOptions.size, mergedOptions.font);
      let localY = y;
      lines.forEach((line) => {
        page.drawText(line, { ...mergedOptions, x, y: localY });
        localY -= mergedOptions.size + 2; // Slightly more line spacing
      });
      return (lines.length - 1) * (mergedOptions.size + 2);
    } else {
      page.drawText(text, { ...mergedOptions, x, y });
      return 0;
    }
  };

  const drawBulletPoint = (text: string, x: number, y: number, options: any = {}) => {
    drawText("•", x - 12, y, { ...options, maxWidth: undefined });
    const yOffset = drawText(text, x, y, options);
    return yOffset;
  };

  const { fullname, contact } = content.home;

  // Split name into first/middle and last name
  const nameParts = fullname.split(' ');
  const lastName = nameParts.pop() || '';
  const firstMiddleName = nameParts.join(' ');

  // Header - Name with different styles for first/middle and last name
  const firstMiddleWidth = font.widthOfTextAtSize(firstMiddleName || '', 28);
  const lastNameWidth = boldFont.widthOfTextAtSize(lastName, 28);
  const totalNameWidth = firstMiddleWidth + lastNameWidth + 10; // 10 is space between parts
  const nameStartX = (width - totalNameWidth) / 2;

  // Draw first/middle name in regular font
  drawText(firstMiddleName, nameStartX, currentY, { 
    font: font,
    size: 28,
    color: rgb(0.4, 0.4, 0.4)
  });

  // Draw last name in bold
  drawText(lastName, nameStartX + firstMiddleWidth + 10, currentY, { 
    font: boldFont,
    size: 28,
    color: rgb(0, 0, 0)
  });
  
  currentY -= 15;

  // Contact Info - Single line with multiple parts
  currentY -= 10;
  const contactY = currentY;
  const contactSize = 9;

  // Format contact information
  const phoneText = `(+65) 81243873 / (+62) 81510002960`;
  const emailText = contact.email;
  const githubText = `github.com/${contact.social.github}`;
  const linkedinText = `in/${contact.social.linkedin}`;
  
  const contactParts = [
    { text: phoneText },
    { text: emailText }
  ];

  // Calculate total width including separators
  const separatorWidth = font.widthOfTextAtSize(" | ", contactSize);
  let totalWidth = 0;
  contactParts.forEach((part, index) => {
    totalWidth += font.widthOfTextAtSize(part.text, contactSize);
    if (index < contactParts.length - 1) totalWidth += separatorWidth;
  });

  // Add width for social links
  totalWidth += separatorWidth * 2;  // For two more separators
  totalWidth += font.widthOfTextAtSize(githubText, contactSize);
  totalWidth += font.widthOfTextAtSize(linkedinText, contactSize);

  // Start position for centered contact info
  let currentX = (width - totalWidth) / 2;

  // Draw contact parts with separators
  contactParts.forEach((part) => {
    drawText(part.text, currentX, contactY, { 
      size: contactSize,
      font: font
    });
    currentX += font.widthOfTextAtSize(part.text, contactSize);
    
    drawText(" | ", currentX, contactY, { 
      size: contactSize,
      font: font
    });
    currentX += separatorWidth;
  });

  // Draw GitHub link
  drawText(githubText, currentX, contactY, {
    size: contactSize,
    font: font,
    color: rgb(0, 0.3, 0.8)
  });
  const githubTextWidth = font.widthOfTextAtSize(githubText, contactSize);
  
  // Draw underline for GitHub
  page.drawLine({
    start: { x: currentX, y: contactY - 2 },
    end: { x: currentX + githubTextWidth, y: contactY - 2 },
    thickness: 0.5,
    color: rgb(0, 0.3, 0.8),
    opacity: 0.5
  });
  currentX += githubTextWidth;

  drawText(" | ", currentX, contactY, { 
    size: contactSize,
    font: font
  });
  currentX += separatorWidth;

  // Draw LinkedIn link
  drawText(linkedinText, currentX, contactY, {
    size: contactSize,
    font: font,
    color: rgb(0, 0.3, 0.8)
  });
  
  // Draw underline for LinkedIn
  const linkedinTextWidth = font.widthOfTextAtSize(linkedinText, contactSize);
  page.drawLine({
    start: { x: currentX, y: contactY - 2 },
    end: { x: currentX + linkedinTextWidth, y: contactY - 2 },
    thickness: 0.5,
    color: rgb(0, 0.3, 0.8),
    opacity: 0.5
  });

  currentY -= SECTION_SPACING - 5;

  // Experience Section
  drawText("Experience", margin, currentY, {
    size: 12,
    font: boldFont,
    color: rgb(0.8, 0.2, 0.1)
  });
  
  // Draw section separator line
  page.drawLine({
    start: { x: margin, y: currentY - 5 },
    end: { x: width - margin, y: currentY - 5 },
    thickness: 0.5,
    color: rgb(0.8, 0.2, 0.1),
    opacity: 0.5
  });
  
  currentY -= 15;

  content.experience.positions.forEach((position) => {
    checkAndAddNewPage();
    
    drawText(position.company, margin, currentY, { font: boldFont, size: 10 });
    drawText(position.location, width - 150, currentY, { size: 9 });
    currentY -= 13;
    
    drawText(position.position, margin, currentY, { 
      size: 9,
      color: rgb(0.3, 0.3, 0.3)
    });
    drawText(position.duration, width - 150, currentY, {
      size: 9,
      color: rgb(0.3, 0.3, 0.3)
    });
    currentY -= 12;

    position.achievements.forEach((achievement) => {
      const yOffset = drawBulletPoint(achievement, margin + 15, currentY, {
        size: 9,
        maxWidth: width - 200
      });
      currentY -= BULLET_SPACING + yOffset;
    });

    const stackText = "Stack: " + position.stack.join(", ");
    const yOffset = drawText(stackText, margin + 15, currentY, {
      size: 8,
      font: boldFont,
      color: rgb(0, 0, 0),
      maxWidth: width - 140
    });
    currentY -= LINE_SPACING + yOffset;
  });

  // Education Section
  checkAndAddNewPage();
  currentY -= 5;
  drawText("Education", margin, currentY, {
    size: 12,
    font: boldFont,
    color: rgb(0.8, 0.2, 0.1)
  });

  // Draw section separator line
  page.drawLine({
    start: { x: margin, y: currentY - 5 },
    end: { x: width - margin, y: currentY - 5 },
    thickness: 0.5,
    color: rgb(0.8, 0.2, 0.1),
    opacity: 0.5
  });

  currentY -= 15;
  const edu = content.education;
  drawText(edu.university.name, margin, currentY, { font: boldFont, size: 10 });
  drawText(edu.university.location, width - 150, currentY, { size: 9 });
  currentY -= 13;
  
  drawText(edu.university.degree, margin, currentY, {
    size: 9,
    color: rgb(0.3, 0.3, 0.3)
  });
  drawText(edu.university.period, width - 150, currentY, {
    size: 9,
    color: rgb(0.3, 0.3, 0.3)
  });
  currentY -= 12;

  edu.university.achievements.forEach((achievement) => {
    const yOffset = drawBulletPoint(achievement, margin + 15, currentY, {
      size: 9,
      maxWidth: width - 200
    });
    currentY -= BULLET_SPACING + yOffset;
  });

  // Publication Section
  checkAndAddNewPage();
  currentY -= 5;
  drawText("Publication", margin, currentY, {
    size: 12,
    font: boldFont,
    color: rgb(0.8, 0.2, 0.1)
  });

  // Draw section separator line
  page.drawLine({
    start: { x: margin, y: currentY - 5 },
    end: { x: width - margin, y: currentY - 5 },
    thickness: 0.5,
    color: rgb(0.8, 0.2, 0.1),
    opacity: 0.5
  });

  currentY -= 15;
  const pub = edu.publication;
  
  // Draw title and location
  drawText(pub.title, margin, currentY, { 
    font: boldFont, 
    size: 10,
    maxWidth: width - 200  // Ensure long titles wrap properly
  });
  drawText(pub.location, width - 150, currentY, { size: 9 });
  currentY -= 13;
  
  // Draw role and date
  drawText(pub.role, margin, currentY, {
    size: 9,
    color: rgb(0.3, 0.3, 0.3)
  });
  drawText(pub.date, width - 150, currentY, {
    size: 9,
    color: rgb(0.3, 0.3, 0.3)
  });
  currentY -= 12;
  
  // Draw conference name with bullet point
  const conferenceYOffset = drawBulletPoint(pub.conference, margin + 15, currentY, {
    size: 9,
    maxWidth: width - 200,
    color: rgb(0, 0, 0)  // Changed to black for better readability
  });
  currentY -= BULLET_SPACING + conferenceYOffset;
  
  // Draw DOI with bullet point
  drawBulletPoint("DOI: " + pub.doi, margin + 15, currentY, {
    size: 9,
    maxWidth: width - 200,
    color: rgb(0, 0, 0)  // Changed to black for better readability
  });

  // Projects Section
  checkAndAddNewPage();
  currentY -= SECTION_SPACING;
  drawText("Projects", margin, currentY, {
    size: 12,
    font: boldFont,
    color: rgb(0.8, 0.2, 0.1)
  });

  // Draw section separator line
  page.drawLine({
    start: { x: margin, y: currentY - 5 },
    end: { x: width - margin, y: currentY - 5 },
    thickness: 0.5,
    color: rgb(0.8, 0.2, 0.1),
    opacity: 0.5
  });

  currentY -= 15;
  content.projects.forEach((project) => {
    checkAndAddNewPage();
    
    drawText(project.title, margin, currentY, { font: boldFont, size: 10 });
    drawText(project.event, width - 150, currentY, { size: 9 });
    currentY -= 13;

    project.achievements.forEach((achievement) => {
      const yOffset = drawBulletPoint(achievement, margin + 15, currentY, {
        size: 9,
        maxWidth: width - 200
      });
      currentY -= BULLET_SPACING + yOffset;
    });

    const stackText = "Stack: " + project.stack.join(", ");
    const yOffset = drawText(stackText, margin + 15, currentY, {
      size: 8,
      font: boldFont,
      color: rgb(0, 0, 0),
      maxWidth: width - 140
    });
    currentY -= LINE_SPACING + yOffset;
  });

  // Draw footer on the last page
  drawFooter(currentPage);

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fullname}.pdf`;
  link.click();
}; 