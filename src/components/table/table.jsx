//import React from 'react';
import './table.css';

export const Table = () => {
    return (
    <>
    <div className="table-container">
    <h3>Ajax Data Table - covid-19 Country Wise State</h3>
    <hr />
    <table className="covid-table">
    <thead>
        <tr>
        <th>flag</th>
        <th>country</th>
        <th>cases</th>
        <th>NewCases</th>
        <th>deaths</th> 
        <th>New Deaths</th>
        <th>Recovered</th>
        <th>Active</th>
        <th>Critical</th>
        <th>Tested</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        
        
    </tbody>
    
    <tfoot>
        <tr>
        <td colSpan={3}>Showing 1 to 10 of 225 entries</td>
        <td colSpan={4}>Previous 1 2 3 4 5 Next</td>
        </tr>
    </tfoot>

    </table>
    </div>
 </>
    );
}