import r2 from 'r2'

export default class CallApi {

    _url = null

    constructor() {
        this._endPoint = `http://localhost:5000:80`
    }

    createUrl(path = '') {
        return resolve(this._endPoint, path)
    }

    to(path) {
        this._url = this.createUrl(path)
        return this
    }

    createHeaders() {
        if (this._token) {
            log('Header with JWT')
            return {
                'Authorization': `JWT ${this._token}`,
            }
        }

        log('Header without JWT')
        return {}
    }

    async asyncGet() {
        try {
            return await r2.get(this._url, {
                headers: this.createHeaders(),
            }).json
        } catch (err) {
            throw new Error(err)
        }
    }

    async asyncPost(payload) {
        try {
            return await r2.post(this._url, {
                json: payload,
                headers: this.createHeaders(),
            }).json
        } catch (err) {
            log(`%c ERROR: async asyncPost(payload) ==> ${JSON.stringify(err)}`, 'text-shadow: 0 0 2 red;')
            throw new Error(err)
        }
    }

    async asyncPut(payload) {
        try {
            return await r2.put(this._url, {
                json: payload,
                headers: this.createHeaders(),
            }).json
        } catch (err) {
            log(`%c ERROR: async asyncPost(payload) ==> ${JSON.stringify(err)}`, 'text-shadow: 0 0 2 red;')
            throw new Error(err)
        }
    }

    async asyncDelete(payload) {
        try {
            return await r2.delete(this._url, {
                json: payload,
                headers: this.createHeaders(),
            }).json
        } catch (err) {
            log(`%c ERROR: async asyncDelete(payload) ==> ${JSON.stringify(err)}`, 'text-shadow: 0 0 2 red;')
            throw new Error(err)
        }
    }

}
