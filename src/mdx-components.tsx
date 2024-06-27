import { Background } from '@tsparticles/engine';
import { url } from 'inspector';
import type { MDXComponents } from 'mdx/types'
import { JetBrains_Mono } from 'next/font/google';

const jetbrains_thin = JetBrains_Mono({subsets: ["latin"], weight:["100"]});
const jetbrains_thick = JetBrains_Mono({subsets: ["latin"], weight:["800"]});
const jetbrains_mid = JetBrains_Mono({subsets: ["latin"], weight:["500"]});
const jetbrains_lean = JetBrains_Mono({subsets: ["latin"], weight:["400"]});
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ id, children }) => <h1  id={id} className={`${jetbrains_thick.className}`} style={{ fontSize: '40px' }}>{children}</h1>,
    h2: ({ id, children }) => <h2 id={id} className={`${jetbrains_mid.className}`}  style={{ fontSize: '25px' }}>{children}</h2>,
    h3: ({ id, children }) => <h3 id={id} className={`${jetbrains_thin.className}`} style={{ fontSize: '20px' }}>{children}</h3>,
    p: ({  children }) => <p className={`${jetbrains_lean.className}`} style={{ fontSize: '18px' }}>{children}</p>,
    a: ({  href,children }) => <a href={href} className={`${jetbrains_lean.className}`} style={{ fontSize: '18px', color:'blue' }}>{children}</a>,
    code: ({  children }) => <code className={`${jetbrains_lean.className}`} style={{ fontSize: '16px'}}>{children}</code>,
    h4: () => <br></br>,
    ...components,
  }
}