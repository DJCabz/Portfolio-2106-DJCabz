import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const path = (rel) => fileURLToPath(new URL(rel, import.meta.url))
const read = (rel) => readFileSync(path(rel), 'utf8')

const doc = new JSDOM(read('../src/index.html')).window.document

const cssPath = path('../src/styles.css')
const cssRaw = existsSync(cssPath) ? readFileSync(cssPath, 'utf8') : ''
// CSS with comments stripped, for checking that real rules were written.
const css = cssRaw.replace(/\/\*[\s\S]*?\*\//g, '')

// Body of the first rule for a class selector, '' if the rule is missing/empty.
const ruleBody = (sel) => {
  const m = css.match(new RegExp(sel.replace('.', '\\.') + '\\s*\\{([^}]*)\\}'))
  return m ? m[1].trim() : ''
}
const hasDeclarations = (sel) => /[a-z-]+\s*:/i.test(ruleBody(sel))

describe('Activity 3 – Styling from your design system', () => {
  it('links styles.css and the stylesheet has rules in it', () => {
    expect(doc.querySelector('link[rel="stylesheet"][href]'), 'Keep styles.css linked from the head').not.toBeNull()
    expect(css.replace(/\s+/g, '').length, 'styles.css looks empty').toBeGreaterThan(0)
  })

  it('uses the stylesheet only (no style="" attributes)', () => {
    expect(doc.querySelectorAll('[style]').length, 'No inline style="" - style by class in styles.css').toBe(0)
  })

  it('keeps a system legend comment at the top of styles.css', () => {
    expect(/\/\*[\s\S]*?\*\//.test(cssRaw), 'Keep your design-system legend as a comment block').toBe(true)
  })

  it('styles the .nav-link component', () => {
    expect(hasDeclarations('.nav-link'), 'Give .nav-link real CSS declarations from your legend').toBe(true)
  })

  it('styles the .btn component', () => {
    expect(hasDeclarations('.btn'), 'Finish the .btn rule using your accent and spacing').toBe(true)
  })

  it('styles the .card component', () => {
    expect(hasDeclarations('.card'), 'Finish the .card rule using your legend values').toBe(true)
  })

  it('applies colour, type and spacing from the system', () => {
    const flat = css.replace(/\s+/g, '').toLowerCase()
    expect(/(^|[;{])color:|background/.test(flat), 'Set colours from your palette').toBe(true)
    expect(flat, 'Set a font-family from your system').toContain('font-family:')
    expect(/padding:|margin:/.test(flat), 'Use spacing from your 8-point scale').toBe(true)
  })

  it('the page actually uses the component classes (.nav-link, .btn, .card)', () => {
    for (const cls of ['nav-link', 'btn', 'card']) {
      expect(doc.querySelector('.' + cls), `Use class="${cls}" in your portfolio HTML`).not.toBeNull()
    }
  })
})

describe('Student info (student.json)', () => {
  const info = JSON.parse(read('../student.json'))
  it('student.json is filled in', () => {
    for (const field of [
      'classCode', 'fullName', 'studentNumber',
      'studentEmail', 'personalEmail', 'githubAccount',
    ]) {
      expect(info[field], `Set "${field}" in student.json`).toBeTruthy()
    }
  })
})
