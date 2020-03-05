import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'

const Comments = ({commentEntities, commentApiActions, commentEditorActions={}})=>{
    const commentsApiConfig = {
        filter: {
          depth: 3,
          q: '',
        },
      }
    const commentsArray = commentEntities.getArray(commentsApiConfig)
    const  commentsNextPage = commentEntities.getNextPage(commentsApiConfig)
    const commentsIsLoading = commentEntities.getIsLoadingArray(commentsApiConfig)
    const commentsNextPageAction = () => commentApiActions.loadNextPage(commentsApiConfig)
    return <div>
        <AsyncEntitiesList {...{
          
          nextPage: commentsNextPage,
          isLoading: commentsIsLoading,
          nextPageAction: commentsNextPageAction,
        }}>
        <TTable {...{
            body: commentsArray,
            header: [
              {
                title: 'comment #',
                name: 'comment',
                sortable: true,
                model: item => item.comment || '-',
              },
              {
                title: 'author',
                name: 'author',
                model: item => (
                  item.author.name
                ),
              },
              
              {
                title: '',
                name: 'edit',
                
                model: item => (
                  <TIcon {...{
                    size: 18,
                    type: ICONS_TYPES.edit,
                    onClick: () => commentEditorActions.editChildEntity(item),
                  }} />
                ),
              },
            ],
            
          }} />
          </AsyncEntitiesList>
    </div>
}

export default Comments