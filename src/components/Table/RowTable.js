import React from 'react'
import { RowsTable, ItemOrder, LineSeparatorTable } from '../../containers/styles/ProfilesStyles'

const RowTable = ({date, state, name}) => {
    const timeFormatted = date.toDate().toLocaleDateString('es')
    return ( 
        <>
            <LineSeparatorTable/>
            <RowsTable>
                <ItemOrder>Cita General</ItemOrder>
                <ItemOrder>{timeFormatted}</ItemOrder>
                <ItemOrder>{name}</ItemOrder>
                <ItemOrder>{state}</ItemOrder>
            </RowsTable>
        </>
    );
}
 
export default RowTable;