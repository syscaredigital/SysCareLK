import React from 'react'
import { motion } from "framer-motion";
export default function header() {
  return (
    <div>
      <motion.div style={{
    color: 'green',
    fontSize: 20,
    width: '300px',
    height: '30px',
    textAlign: 'center',
    border: '2px solid green',
    margin: '40px'
}}>
    GeeksforGeeks
</motion.div>
    </div>
  )
}
