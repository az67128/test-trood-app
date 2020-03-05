import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'

const ContactPersons = ({contactPersonEntities, contactPersonApiActions, contactPersonEditorActions={}})=>{
    const contactPersonsApiConfig = {
        filter: {
          depth: 3,
          q: '',
        },
      }
    const contactPersonsArray = contactPersonEntities.getArray(contactPersonsApiConfig)
    const  contactPersonsNextPage = contactPersonEntities.getNextPage(contactPersonsApiConfig)
    const contactPersonsIsLoading = contactPersonEntities.getIsLoadingArray(contactPersonsApiConfig)
    const contactPersonsNextPageAction = () => contactPersonApiActions.loadNextPage(contactPersonsApiConfig)
    return <div>
        <AsyncEntitiesList {...{
          
          nextPage: contactPersonsNextPage,
          isLoading: contactPersonsIsLoading,
          nextPageAction: contactPersonsNextPageAction,
        }}>
        <TTable {...{
            body: contactPersonsArray,
            header: [
              {
                title: 'contactPerson #',
                name: 'name',
                sortable: true,
                model: item => item.name || '-',
              },
              {
                title: 'client',
                name: 'client',
                model: item => (
                  item.client.name
                ),
              },
              
              {
                title: '',
                name: 'edit',
                
                model: item => (
                  <TIcon {...{
                    size: 18,
                    type: ICONS_TYPES.edit,
                    onClick: () => contactPersonEditorActions.editChildEntity(item),
                  }} />
                ),
              },
            ],
            
          }} />
          </AsyncEntitiesList>
    </div>
}

export default ContactPersons