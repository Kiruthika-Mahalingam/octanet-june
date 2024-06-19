import React from 'react'

const Footer = () => {
const year = new Date();
  return (
   <footer>Copyright &copy; {year.getFullYear()} Kiruthika M</footer>
  )
}

export default Footer;