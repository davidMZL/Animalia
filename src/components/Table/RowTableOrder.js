import React from 'react'
import { RowsTable, ItemOrder, LineSeparatorTable } from '../../containers/styles/ProfilesStyles'

const RowTableOrder = ({state, orderId, timeCreated, name}) => {
    const timeFormatted = timeCreated.toDate().toLocaleDateString('es')
    return ( 
        <>
            <LineSeparatorTable/>
            <RowsTable>
                <ItemOrder>{orderId}</ItemOrder>
                <ItemOrder>{timeFormatted}</ItemOrder>
                <ItemOrder>{state}</ItemOrder>
                <ItemOrder>{name}</ItemOrder>
            </RowsTable>
        </>
    );
}
 
export default RowTableOrder;