import Sidebar from '../sidebar/sidebar';
import { Isstable } from './admin';

export function ListIssuedBook({ heading, sty }) {
    return (
        <Sidebar>
            <div style={{ height: "80vh" }}>
                <Isstable
                    heading="List of Issued Book"
                    sty="bg-warning text-dark"
                />
            </div>
        </Sidebar>
    )
}