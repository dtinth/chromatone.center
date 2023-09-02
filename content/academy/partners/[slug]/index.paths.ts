import { useItems } from "../../../../db"

export default {
  async paths() {

    const partners = await useItems('partners', {
      fields: [
        '*',
        {
          events: [
            '*',
            { project: ['title'] }
          ]
        }
      ],
    })

    return partners.map(p => {
      let content = p.content
      delete p.content
      return { params: p, content }
    })
  }
}