import React from "react";
import PropTypes from "prop-types";
const TableHeader = ({onSort,selectedSort,colums}) => { const handleSort = (item) => {
    if(selectedSort.iter===item) {
        onSort({...selectedSort,
            order:selectedSort.order === "asc" ? "desc" : "asc"
        });
    } else {
        onSort({iter:item,order:'asc'});
    };
 };

return  <thead>
<tr>
    <th onClick={()=>handleSort('name')} scope="col">Имя</th>
    <th  scope="col">Качества</th>
    <th onClick={()=>handleSort('profession.name')} scope="col">Профессия</th>
    <th onClick={()=>handleSort('completedMeetings')} scope="col">Встретился, раз</th>
    <th onClick={()=>handleSort('rate')} scope="col">Оценка</th>
    <th onClick={()=>handleSort('bookmark')} scope="col">Избранное</th>
    <th  />
</tr>
</thead>;
};

TableHeader.propTypes =  {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    colums: PropTypes.object.isRequired,
};

export default TableHeader;