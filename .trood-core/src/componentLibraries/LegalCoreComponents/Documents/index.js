import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'

const Documents = ({documentEntities, documentApiActions, documentEditorActions={}})=>{
    const documentApiConfig = {
        filter: {
          depth: 3,
          q: '',
        },
      }
    const documentArray = documentEntities.getArray(documentApiConfig)
    const  documentNextPage = documentEntities.getNextPage(documentApiConfig)
    const documentIsLoading = documentEntities.getIsLoadingArray(documentApiConfig)
    const documentNextPageAction = () => documentApiActions.loadNextPage(documentApiConfig)
    return <div>
        <AsyncEntitiesList {...{
          
          nextPage: documentNextPage,
          isLoading: documentIsLoading,
          nextPageAction: documentNextPageAction,
        }}>
        <TTable {...{
            body: documentArray,
            header: [
              {
                title: 'id #',
                name: 'id',
                sortable: true,
                model: item => item.id || '-',
              },
              {
                title: 'name',
                name: 'description',
                model: item => (
                  item.description
                ),
              },
              
              {
                title: '',
                name: 'edit',
                
                model: item => (
                  <TIcon {...{
                    size: 18,
                    type: ICONS_TYPES.edit,
                    onClick: () => documentEditorActions.editChildEntity(item),
                  }} />
                ),
              },
            ],
            
          }} />
          </AsyncEntitiesList>
    </div>
}

export default Documents