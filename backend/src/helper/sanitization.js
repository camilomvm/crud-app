
export function sanitizeString(str) {
    if (typeof str !== 'string') return '';
  
    let sanitized = str.trim();
  
    sanitized = sanitized
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  
    return sanitized;
  }
  
 
  export function sanitizeNumber(num) {
    const sanitized = Number(num);
  
    return Number.isSafeInteger(sanitized) ? sanitized : NaN;
  }
  