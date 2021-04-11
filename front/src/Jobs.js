import React from 'react';
import Typography from '@material-ui/core/Typography';
 // eslint-disable-next-line
import Job from './Job';

export default function Jobs({jobs}){
return (
    <div className="jobs">

        <Typography variant="h1">
            Entry level software jobs
        </Typography>
        {
        jobs.map(
            job=> <Job  job={job} />
        )
    }
    </div>
)
}