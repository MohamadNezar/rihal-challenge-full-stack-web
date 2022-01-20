
import classes from './TableData.module.css';


function TableOfStatistics(props){

    return (<div>

<table className={classes.table}>
        <thead>
          <tr>
            <th>{props.col1Title}</th>
            <th>{props.col2Title}</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr>
              <td>{item.name??'N/A'}</td>
              <td>{item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>);
}


export default TableOfStatistics;