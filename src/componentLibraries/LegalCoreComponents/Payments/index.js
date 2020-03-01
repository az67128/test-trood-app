import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'

const Payments = ({paymentEntities, paymentApiActions, paymentEditorActions={}})=>{
    const paymentsApiConfig = {
        filter: {
          depth: 3,
          q: '',
        },
      }
    const paymentsArray = paymentEntities.getArray(paymentsApiConfig)
    const  paymentsNextPage = paymentEntities.getNextPage(paymentsApiConfig)
    const paymentsIsLoading = paymentEntities.getIsLoadingArray(paymentsApiConfig)
    const paymentsNextPageAction = () => paymentApiActions.loadNextPage(paymentsApiConfig)
    return <div>
        <AsyncEntitiesList {...{
          
          nextPage: paymentsNextPage,
          isLoading: paymentsIsLoading,
          nextPageAction: paymentsNextPageAction,
        }}>
        <TTable {...{
            body: paymentsArray,
            header: [
              {
                title: 'payment #',
                name: 'number',
                sortable: true,
                model: item => item.number || '-',
              },
              {
                title: 'client',
                name: 'client',
                model: item => (
                  item.name
                ),
              },
              
              {
                title: '',
                name: 'edit',
                
                model: item => (
                  <TIcon {...{
                    size: 18,
                    type: ICONS_TYPES.edit,
                    onClick: () => paymentEditorActions.editChildEntity(item),
                  }} />
                ),
              },
            ],
            
          }} />
          </AsyncEntitiesList>
    </div>
}

export default Payments