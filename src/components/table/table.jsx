//import React from 'react';
import './table.css';

export const Table = () => {
    return (
    <>
    <h3>Ajax Data Table - covid-19 Country Wise State</h3>

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
        <td>US</td>
        <td>USA</td>
        <td>75578076</td>
        <td>0</td>
        <td>907190</td>
        <td>0</td>
        <td>45937985</td>
        <td>28732901</td>
        <td>23746</td>
        <td>898414462</td>
        </tr>
        
        <tr>
        <td>IN</td>
        <td>India</td>
        <td>41302440</td>
        <td>0</td>
        <td>495050</td>
        <td>0</td>
        <td>38976122</td>
        <td>1831268</td>
        <td>8944</td>
        <td>728997813</td>
        </tr>

        <tr>
        <td>🇧🇷</td>
        <td>Brazil</td>
        <td>25351489</td>
        <td>0</td>
        <td>626923</td>
        <td>0</td>
        <td>22163750</td>
        <td>2560816</td>
        <td>8318</td>
        <td>63776166</td>
        </tr>

        <tr>
        <td>🇫🇷</td>
        <td>France</td>
        <td>19058073</td>
        <td>0</td>
        <td>130583</td>
        <td>0</td>
        <td>12442680</td>
        <td>6484810</td>
        <td>3641</td>
        <td>231648947</td>
        </tr>
        

    <tr>
    <td>🇬🇧</td>
    <td>UK</td>
    <td>16468522</td>
    <td>0</td>
    <td>155698</td>
    <td>0</td>
    <td>13484929</td>
    <td>2827895</td>
    <td>549</td>
    <td>449557401</td>
        </tr>

    <tr>
        <td>🇷🇺</td>
    <td>Russia</td>
    <td>11861077</td>
    <td>124070</td>
    <td>331349</td>
    <td>621</td>
    <td>10248281</td>
    <td>1281447</td>
    <td>2300</td>
    <td>247600000</td>
        </tr>

    <tr>
        <td>🇹🇷</td>
    <td>Turkey</td>
    <td>11526621</td>
    <td>0</td>
    <td>87234</td>
    <td>0</td>
    <td>10817721</td>
    <td>621666</td>
    <td>1128</td>
    <td>130871227</td>
        </tr>

    <tr>
        <td>🇮🇹</td>
    <td>Italy</td>
    <td>10983116</td>
    <td>57715</td>
    <td>146498</td>
    <td>349</td>
    <td>8244012</td>
    <td>2592606</td>
    <td>1584</td>
    <td>170631727</td>
        </tr>

    <tr>
        <td>🇩🇪</td>
    <td>Germany</td>
    <td>9825938</td>
    <td>49290</td>
    <td>118453</td>
    <td>73</td>
    <td>7622400</td>
    <td>2085085</td>
    <td>2274</td>
    <td>89622218</td>
    </tr>

    <tr>
    <td>🇪🇸</td>
    <td>Spain</td>
    <td>9779130</td>
    <td>0</td>
    <td>92966</td>
    <td>0</td>
    <td>5839859</td>
    <td>3846305</td>
    <td>2060</td>
    <td>66213858</td>
        </tr>
    </tbody>
    
    <tfoot>
        <tr>
        <td colSpan={3}>Showing 1 to 10 of 225 entries</td>
        <td colSpan={4}>Previous 1 2 3 4 5 Next</td>
        </tr>
    </tfoot>

    </table>
 </>
    );
}