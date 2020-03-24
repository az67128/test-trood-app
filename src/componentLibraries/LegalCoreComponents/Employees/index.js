import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'

const Employees = ({employeeEntities, employeeApiActions, employeeEditorActions={}})=>{
    const employeeApiConfig = {
        filter: {
          depth: 3,
          q: '',
        },
      }
    const employeeArray = employeeEntities.getArray(employeeApiConfig)
    const  employeeNextPage = employeeEntities.getNextPage(employeeApiConfig)
    const employeeIsLoading = employeeEntities.getIsLoadingArray(employeeApiConfig)
    const employeeNextPageAction = () => employeeApiActions.loadNextPage(employeeApiConfig)
    return <div>
        <AsyncEntitiesList {...{
          
          nextPage: employeeNextPage,
          isLoading: employeeIsLoading,
          nextPageAction: employeeNextPageAction,
        }}>
        <TTable {...{
            body: employeeArray,
            header: [
              {
                title: 'id #',
                name: 'id',
                sortable: true,
                model: item => item.id || '-',
              },
              {
                title: 'name',
                name: 'name',
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
                    onClick: () => employeeEditorActions.editChildEntity(item),
                  }} />
                ),
              },
            ],
            
          }} />
          </AsyncEntitiesList>
    </div>
}

export default Employees