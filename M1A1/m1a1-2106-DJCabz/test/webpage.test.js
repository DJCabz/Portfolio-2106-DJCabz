import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const read = (rel) =>
  readFileSync(fileURLToPath(new URL(rel, import.meta.url)), 'utf8')

const dom = new JSDOM(read('../src/index.html'))
const doc = dom.window.document

describe('Activity 1 – Create a Basic Webpage', () => {
  it('declares the HTML5 doctype (<!DOCTYPE html>)', () => {
    expect(doc.doctype, 'Add <!DOCTYPE html> on the very first line').not.toBeNull()
    expect(doc.doctype?.name?.toLowerCase()).toBe('html')
    // The short HTML5 doctype has no public or system identifier.
    expect(doc.doctype?.publicId).toBe('')
    expect(doc.doctype?.systemId).toBe('')
  })

  it('the html element has a lang attribute', () => {
    const lang = doc.documentElement.getAttribute('lang')
    expect(lang, 'Set a language on <html>, e.g. <html lang="en">').toBeTruthy()
  })

  it('has a non-empty <title> in the head', () => {
    expect(
      doc.querySelector('head title'),
      'Add a <title> inside <head>',
    ).not.toBeNull()
    expect(doc.title.trim(), 'Put some text inside <title>').toBeTruthy()
  })

  it('declares the character encoding (<meta charset="utf-8">)', () => {
    const meta = doc.querySelector('meta[charset]')
    expect(meta, 'Add <meta charset="utf-8"> inside <head>').not.toBeNull()
    expect(meta.getAttribute('charset').toLowerCase()).toBe('utf-8')
  })

  it('the body shows a welcome heading or paragraph with text', () => {
    const els = [...doc.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p')]
    const hasText = els.some((el) => el.textContent.trim().length > 0)
    expect(
      hasText,
      'Add a heading or paragraph with a welcome message inside <body>',
    ).toBe(true)
  })
})

describe('Student info (student.json)', () => {
  const info = JSON.parse(read('../student.json'))

  it('student.json is filled in', () => {
    for (const field of [
      'classCode',
      'fullName',
      'studentNumber',
      'studentEmail',
      'personalEmail',
      'githubAccount',
    ]) {
      expect(info[field], `Set "${field}" in student.json`).toBeTruthy()
    }
  })
})
