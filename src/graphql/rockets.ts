import ghl from 'graphql-tag';

export const LAUNCH_QUERY = ghl`
      query LaunchesPast( $limit: Int , $offset: Int ) {
        launchesPast( limit: $limit , offset: $offset ){
          links {
            flickr_images
            mission_patch_small
          }
          id
          mission_name
          details
          rocket {
            rocket_name
            rocket_type
          }
        }
      }`
export const LAUNCH_2_QUERY =ghl`
 query Launch($id: ID!){
  
    launch(id: $id) {
      mission_name
      details
      launch_success
      links {
        flickr_images
        mission_patch_small
      }
      rocket{
        rocket_name
      }
      id
      launch_year
    }
  }`
  


