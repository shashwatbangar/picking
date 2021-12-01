import api from '@/api';

const getPicklists = async (): Promise<any> => {
  return api({
    url: 'picklists', 
    method: 'get',
    cache: true
  });
}

const getPicklist = async (query: any): Promise<any> => {
  return api({
    url: `picklists/${query.id}`,
    method: 'get'
  })
}

export const PicklistService = {
  getPicklists,
  getPicklist
}