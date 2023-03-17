import fetch, { Res } from '@/util/request'

export default {
  /**
   * 删除页面
   * @param {Object} options
   * @param {number} options.pageId
   * @returns {Promise<Res>} 删除结果
   */
  removePage(options: { data: { pageId: number } }): Promise<Res> {
    // return fetch.post({    })
    return new Promise<Res>(() => {})
  }
}