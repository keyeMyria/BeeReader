export const REQUEST = "ACCOUNT_REQUEST"
export const LOAD = "ACCOUNT_LOAD"

export const load = (result) => ({
  type: LOAD,
  items: result.data.account
})

export const fetchAccount = () => (dispatch, state) => {
  return dispatch({
    type: REQUEST, 
    sync: {url: "accountsPath"}
  }).then(res => {
    dispatch(load(res))
  })
}