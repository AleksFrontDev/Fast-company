import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";
const UsersTable = ({users,onSort,selectedSort,...rest}) => {
    return <table className="table">
   
    <tbody>
        {users.map((user) => (
            <User {...rest} {...user} key={user._id} />
        ))}
    </tbody>
</table> ;
};

const UserTable = ({ users, onSort, selectedSort, ...rest }) => {

    return (
        <table className="table">
            <TableHeader />
            <tbody>
                {users.map((user)=>(
                    <User {...rest} {...user} key={user._id} />
                ))}
            </tbody>
        </table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

 export default UserTable;