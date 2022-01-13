import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import { FaBeer } from 'react-icons/fa';

export default function Table() {
  return (
    <MDBTable>
      <MDBTableBody className='constructor'>
        
        <tr>
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultIndeterminate" checked/>
        <label class="custom-control-label" for="defaultIndeterminate"></label>
      </div>
          <th scope='col'>Search <br/> 29380 Yesterday </th>
          <th scope='col'>Mobile Traffic: 100%<br/>Web Traffic: 100%</th>
        </tr>

        <tr>
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultIndeterminate" checked/>
        <label class="custom-control-label" for="defaultIndeterminate"></label>
      </div>
    
          <th scope='col'>Click<br/> 243 Yesterday </th>
          <th scope='col'>CTR: 0.04%<br/></th>
          
        </tr>
        <tr>
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultIndeterminate" checked/>
        <label class="custom-control-label" for="defaultIndeterminate"></label>
      </div>
          <th scope='col'>Booking<br/> 24 Yesterday </th>
          <th scope='col'>STR: 6.2 %<br/>Age Check: 9.803 </th>
          
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}