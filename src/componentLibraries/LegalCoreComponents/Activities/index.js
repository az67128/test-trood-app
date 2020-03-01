import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'

const activitys = ({activityEntities, activityApiActions, activityEditorActions={}})=>{
    const activitysApiConfig = {
        filter: {
          depth: 3,
          q: '',
        },
      }
    const activitysArray = activityEntities.getArray(activitysApiConfig)
    const  activitysNextPage = activityEntities.getNextPage(activitysApiConfig)
    const activitysIsLoading = activityEntities.getIsLoadingArray(activitysApiConfig)
    const activitysNextPageAction = () => activityApiActions.loadNextPage(activitysApiConfig)
    return <div>
        <AsyncEntitiesList {...{
          
          nextPage: activitysNextPage,
          isLoading: activitysIsLoading,
          nextPageAction: activitysNextPageAction,
        }}>
        <TTable {...{
            body: activitysArray,
            header: [
              {
                title: 'activity #',
                name: 'name',
                sortable: true,
                model: item => item.name || '-',
              },
              {
                title: 'executor',
                name: 'executor',
                model: item => (
                  item.executor.name
                ),
              },
              
              {
                title: '',
                name: 'edit',
                
                model: item => (
                  <TIcon {...{
                    size: 18,
                    type: ICONS_TYPES.edit,
                    onClick: () => activityEditorActions.editChildEntity(item),
                  }} />
                ),
              },
            ],
            
          }} />
          </AsyncEntitiesList>
    </div>
}

export default activitys