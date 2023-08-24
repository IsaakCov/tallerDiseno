import React from 'react'
import "./UserAddress.css"

const UserAddress = () => {
    const [show] = React.useState(false)

    const savedaddress = [
        {
            AddressLine1: 'AddresLine1',
            AddressLine2: 'AddressLine2',
            AddressLine3: 'AddressLine3',
        }
        /* {
            AddressLine1: 'AddressLine5',
            AddressLine2: 'AddressLine6',
            AddressLine3: 'AddressLine7',
        },
        {
            AddressLine1: 'AddressLine8',
            AddressLine2: 'AddressLine9',
            AddressLine3: 'AddressLine10',
        } */
    ]
    return (
        <div className='useraddress'>
            {
                !show && <h1 className='mainhead1'>Mis direcciones</h1>
            }
            {
                /* !show && */

                <div className='addressin'>
                    {
                        savedaddress.map((item, index) => {
                            return (
                                
                                <div className='address' key={index}>
                                    <span>{item.AddressLine1}</span>
                                    
                                    
                                    <table className='yourorderstable'>
                                        <thead>
                                            <tr>
                                                <th scope="cool"> Dirección de envío</th>

                                            </tr>
                                        </thead>

                                    </table>


                                    <div className='delbtn'>
                                    <i class="bi bi-house-check"></i>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }

        
            
        </div>
    )
}

export default UserAddress