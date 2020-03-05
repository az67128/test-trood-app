import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'

const Contacts = ({contactEntities, contactApiActions, contactEditorActions={}})=>{
    const contactsApiConfig = {
        filter: {
          depth: 3,
          q: '',
        },
      }
    const contactsArray = contactEntities.getArray(contactsApiConfig)
    const  contactsNextPage = contactEntities.getNextPage(contactsApiConfig)
    const contactsIsLoading = contactEntities.getIsLoadingArray(contactsApiConfig)
    const contactsNextPageAction = () => contactApiActions.loadNextPage(contactsApiConfig)
    return <div>
        <AsyncEntitiesList {...{
          
          nextPage: contactsNextPage,
          isLoading: contactsIsLoading,
          nextPageAction: contactsNextPageAction,
        }}>
        <TTable {...{
            body: contactsArray,
            header: [
              {
                title: 'contact #',
                name: 'id',
                sortable: true,
                model: item => item.id || '-',
              },
              {
                title: 'value',
                name: 'value',
                model: item => (
                  item.value
                ),
              },
              
              {
                title: '',
                name: 'edit',
                
                model: item => (
                  <TIcon {...{
                    size: 18,
                    type: ICONS_TYPES.edit,
                    onClick: () => contactEditorActions.editChildEntity(item),
                  }} />
                ),
              },
            ],
            
          }} />
          </AsyncEntitiesList>
    </div>
}

export default Contacts