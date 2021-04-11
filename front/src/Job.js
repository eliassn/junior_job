import React from 'react';

// eslint-disable-next-line
export default function({job}){
    return(
        <div className={"job"}>
            <table>
                <tr>
                    <th>
                        {job.company}
                    </th>
                </tr>
                <tbody>
                    <td>
                        {job.title}
                    </td>
                </tbody>
            </table>
        </div>
        
    )
}