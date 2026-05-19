export const FIELD_LIMITS = {
  nome: 80,
  whatsapp: 20,
  negocio: 100,
  email: 120,
  dor: 900,
  prazo: 240,
  investimento: 160,
};

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const BLOCKED_TEXT_CHARS = new Set(['<', '>', '`', '{', '}', '[', ']', '\\']);

function normalizeBriefingText(value, maxLength, { multiline = false } = {}) {
  const normalized = [];
  let previousWasSpace = false;
  let consecutiveNewLines = 0;

  for (const char of String(value || '')) {
    const charCode = char.charCodeAt(0);
    const isLineBreak = char === '\n';
    const isControlChar = charCode <= 31 || charCode === 127;

    if (BLOCKED_TEXT_CHARS.has(char)) continue;

    if (multiline && isLineBreak) {
      if (consecutiveNewLines < 2) normalized.push(char);
      consecutiveNewLines += 1;
      previousWasSpace = false;
      continue;
    }

    if (isControlChar) {
      if (!previousWasSpace) normalized.push(' ');
      previousWasSpace = true;
      consecutiveNewLines = 0;
      continue;
    }

    if (char === ' ' || char === '\t') {
      if (!previousWasSpace) normalized.push(' ');
      previousWasSpace = true;
      consecutiveNewLines = 0;
      continue;
    }

    normalized.push(char);
    previousWasSpace = false;
    consecutiveNewLines = 0;

    if (normalized.length >= maxLength) break;
  }

  return normalized.join('').trim().slice(0, maxLength);
}

export function cleanText(value, maxLength) {
  return normalizeBriefingText(value, maxLength);
}

export function cleanMultilineText(value, maxLength) {
  return normalizeBriefingText(value, maxLength, { multiline: true });
}
