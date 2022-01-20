
import {Link} from 'react-router-dom';

import classes from './TableData.module.css';


function TableData (props){
return (<div>
   <h3> <Link to="add" state={{toEdit:false,student:null}} className={classes.add}>Add New</Link></h3>
    <table className={classes.table}>
        <thead>
            <tr>
                {props.columns.map(val=><th>{val}</th>)}   
            
            </tr>
        </thead>
        <tbody>
            { props.rows.map((element) => (
                <tr key={ element.id }>
                    {props.columns.map((val,index)=><td>{ element[val]??'N/A'}</td>)
                    }
                    <td>
                        <Link to="edit" state={{toEdit:true,item:element}}  className={classes.edit}>Edit</Link>
                        <button onClick={ () =>window.confirm("you are sure you want to delete this item?"
                        )?props.onDelete(element.id):null } className={classes.delete}>Delete</button>
                 </td>
                </tr>   
            )
            )
            }
        </tbody>
    </table>
</div>);

}

export default TableData;