import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import logo from '../images/logo-1.jpg'


function Sheet() {
  const [sheetUrl, setSheetUrl] = useState('')
  const [elements, setElements] = useState([])
  const [company, setCompany] = useState('')
  const [jobsite, setJobsite] = useState('')


  useEffect(()=>{
    let location = window.location.toString()
    setElements(location.split('=')[2].split(','))
    setCompany(location.split('=')[3].replace(/%20/g, ' ').split('&&')[0])
    setJobsite(location.split('=')[4].replace(/%20/g, ' '))
  },[])

  useEffect(()=>{
    if(elements.length > 0){
      window.print()
    }
  },[elements])


  function getCurrentDate() {
    let todayte = new Date()
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return todayte.toLocaleDateString(undefined, options);
  }

  function printSheet(){
    window.print()
  }

 
  return (
    
      <div className='sheet'>
              <div id="header">
          <img src={logo}></img>
          <h1> INVENTORY </h1>
          <div>
              <p> 10979 Olsen Road </p>
              <p> Surrey, BC </p>
              <p> V3V 3S9 </p>
              <p> Tel:(778) 898-5301 </p>
              <p> info@ttfscaffolding.com </p>
          </div>
        </div>
        <div id="contact-info">
          <div id="firstRow">
              <h2> CUSTOMER NAME: </h2>
              <p> {company} </p>
              <h2> DATE:</h2>
              <p> {getCurrentDate()}</p>
          </div>
          <div id="seccondRow">
              <h2> JOBSITE:  </h2>
              <p> {jobsite}</p>
              <h2> ADDED VIA:</h2>
              <p></p>
          </div>

        </div>
        <div className='content'>
          <table>
            <thead>
              <tr>
                <th> DESCRIPTION </th>
                <th> ADD </th>
                <th> RET </th>
                <th> DESCRIPTION </th>
                <th> ADD </th>
                <th> RET </th>
              </tr>
            </thead>
            <tbody>
            <tr>
               <td className='description'> <i className="bi bi-square"></i> 6’H X 4’W ALUM H.D. FRAMES </td>
               <td> {elements[3] !== '0' ? elements[3] : ""} </td>
               <td></td>
               <td className='description'> 20’ 0” ALUM.BEAMS (PURPLE)</td>
               <td> {elements[31] !== '0' ? elements[31] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> 5’H X 4’W ALUM H.D. FRAMES </td>
               <td> {elements[4] !== '0' ? elements[4] : ""} </td>
               <td></td>
               <td className='description'> 18’ 0” ALUM.BEAMS (RED)</td>
               <td> {elements[32] !== '0' ? elements[32] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> 4’H X 4’W ALUM H.D. FRAMES </td>
               <td> {elements[5] !== '0' ? elements[5] : ""} </td>
               <td></td>
               <td className='description'> 16’ 0” ALUM.BEAMS (YELLOW) </td>
               <td> {elements[33] !== '0' ? elements[33] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td></td>
               <td> </td>
               <td></td>
               <td className='description'> 14’ 0” ALUM.BEAMS (SILVER)</td>
               <td> {elements[34] !== '0' ? elements[34] : ""}  </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> 6’H X 4’W STEEL H.D. FRAMES </td>
               <td> {elements[7] !== '0' ? elements[7] : ""} </td>
               <td></td>
               <td className='description'> 13’ 0” ALUM.BEAMS (PINK) </td>
               <td> {elements[35] !== '0' ? elements[35] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> 5’H X 4’W STEEL H.D. FRAMES </td>
               <td> {elements[8] !== '0' ? elements[8] : ""} </td>
               <td></td>
               <td className='description'> 12’ 0” ALUM.BEAMS (BROWN)  </td>
               <td> {elements[36] !== '0' ? elements[36] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> 4’H X 4’W STEEL H.D. FRAMES </td>
               <td> {elements[9] !== '0' ? elements[9] : ""} </td>
               <td></td>
               <td className='description'> 11’ 0” ALUM.BEAMS (GREEN) </td>
               <td> {elements[38] !== '0' ? elements[38] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> 3’H X 4’W STEEL H.D. FRAMES </td>
               <td> {elements[10] !== '0' ? elements[10] : ""} </td>
               <td></td>
               <td className='description'> 10.6’ 0” ALUM.BEAMS (BLUE) </td>
               <td> {elements[37] !== '0' ? elements[37] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'>  </td>
               <td>  </td>
               <td></td>
               <td className='description'> 10.0’ 0” ALUM.BEAMS (BLACK) </td>
               <td>{elements[39] !== '0' ? elements[39] : ""}  </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'>  </td>
               <td></td>
               <td></td>
               <td className='description'> 9’ 0” ALUM.BEAMS (ORANGE)</td>
               <td>  {elements[40] !== '0' ? elements[40] : ""}  </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> 10 X 4 C.BARS (PURPLE) </td>
               <td> {elements[11] !== '0' ? elements[11] : ""} </td>
               <td></td>
               <td className='description'> 8’ 0” ALUM.BEAMS (RED)</td>
               <td> {elements[41] !== '0' ? elements[41] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> 10 X 2 C.BARS (PINK) </td>
               <td> {elements[12] !== '0' ? elements[12] : ""} </td>
               <td></td>
               <td className='description'> 7’ 0” ALUM.BEAMS (YELLOW) </td>
               <td> {elements[42] !== '0' ? elements[42] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> 7 X 4 C.BARS (YELLOW) </td>
               <td> {elements[13] !== '0' ? elements[13] : ""} </td>
               <td></td>
               <td className='description'> 6’ 0” ALUM.BEAMS (GREEN) </td>
               <td> {elements[43] !== '0' ? elements[43] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> 7 X 2 C.BARS (RED) </td>
               <td> {elements[14] !== '0' ? elements[14] : ""} </td>
               <td></td>
               <td className='description'> 5’ 0” ALUM.BEAMS (WHITE) </td>
               <td> {elements[44] !== '0' ? elements[44] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> 5 X 4 C.BARS (GREEN) </td>
               <td> {elements[15] !== '0' ? elements[15] : ""} </td>
               <td></td>
               <td className='description'> 4’ 0” ALUM.BEAMS (LIME) </td>
               <td> {elements[45] !== '0' ? elements[45] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> 5 X 2 C.BARS (ORANGE) </td>
               <td> {elements[16] !== '0' ? elements[16] : ""} </td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> 4 X 4 C.BARS (BLUE) </td>
               <td> {elements[17] !== '0' ? elements[17] : ""} </td>
               <td></td>
               <td className='description'> NO.1 SHORES </td>
               <td> {elements[27] !== '0' ? elements[27] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> 4 X 2 C.BARS (WHITE) </td>
               <td> {elements[18] !== '0' ? elements[18] : ""} </td>
               <td></td>
               <td className='description'> NO.2 SHORES</td>
               <td> {elements[28] !== '0' ? elements[28] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td></td>
               <td></td>
               <td></td>
               <td className='description'> NO.3 SHORES</td>
               <td> {elements[29] !== '0' ? elements[29] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> ALUM H.D S.J U/HEADS </td>
               <td> {elements[19] !== '0' ? elements[19] : ""} </td>
               <td></td>
               <td className='description'> NO.4 SHORES</td>
               <td> {elements[30] !== '0' ? elements[30] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> ALUM H.D S.J B/PLATES </td>
               <td> {elements[20] !== '0' ? elements[20] : ""} </td>
               <td></td>
               <td className='description'> </td>
               <td>  </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'>  </td>
               <td>  </td>
               <td></td>
               <td className='description'> 12'0" 4X6 WOOD BEAMS </td>
               <td> {elements[47] !== '0' ? elements[47] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> STEEL H.D S.J U/HEADS  </td>
               <td> {elements[21] !== '0' ? elements[21] : ""} </td>
               <td></td>
               <td className='description'> 11'0" 4X6 WOOD BEAMS </td>
               <td> {elements[48] !== '0' ? elements[48] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> STEEL H.D S.J B/PLATES  </td>
               <td> {elements[22] !== '0' ? elements[22] : ""} </td>
               <td></td>
               <td className='description'> 10'0" 4X6 WOOD BEAMS </td>
               <td> {elements[49] !== '0' ? elements[49] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'>  </td>
               <td> </td>
               <td></td>
               <td className='description'> 9'0" 4X6 WOOD BEAMS </td>
               <td> {elements[50] !== '0' ? elements[50] : ""}</td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> ALUM H.D. FRAME COUP PINS </td>
               <td> {elements[23] !== '0' ? elements[23] : ""} </td>
               <td></td>
               <td className='description'> 8'0" 4X6 WOOD BEAMS </td>
               <td> {elements[51] !== '0' ? elements[51] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> <i className="bi bi-square"></i> STEEL H.D. FRAME COUP PINS  </td>
               <td> {elements[24] !== '0' ? elements[24] : ""} </td>
               <td></td>
               <td className='description'> 7'0" 4X6 WOOD BEAMS </td>
               <td> {elements[52] !== '0' ? elements[52] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td></td>
               <td></td>
               <td></td>
               <td className='description'> 6'0" 4X6 WOOD BEAMS </td>
               <td> {elements[53] !== '0' ? elements[53] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td className='description'> BEAM CLIPS-REG  </td>
               <td> {elements[25] !== '0' ? elements[25] : ""} </td>
               <td></td>
               <td className='description'> 5'0" 4X6 WOOD BEAMS </td>
               <td> {elements[54] !== '0' ? elements[54] : ""} </td>
               <td></td>
              </tr>
             <tr>
               <td></td>
               <td></td>
               <td></td>
               <td className='description'> 4'0" 4X6 WOOD BEAMS </td>
               <td> {elements[55] !== '0' ? elements[55] : ""} </td>
               <td></td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
  )
}

export default Sheet