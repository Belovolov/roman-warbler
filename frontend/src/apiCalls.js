export async function getMessages() {
  fetch('/api/messages')
            .then(res => {
              if (!res.ok) {
                if ((res.status<=400)&&(res.status<500)) {
                    return res.json(data => {throw new Error(data.message)})
                }
                else throw new Error('Server is not responding. Try later')
              }
              else {
                return res.json()
              }
            })
}