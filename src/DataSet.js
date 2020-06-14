import React from 'react';

export class DataSet extends React.Component{
    constructor(options){
        super(options);
        this.options = {
            host: 'http://localhost:8080/api/',
            object: options.object
        }
        this.listElem = undefined;
    }

    query(query, options, params){
        let url = new URL(this.options.host);
        url.pathname +=query;
        for (let k in params){
            url.searchParams.set(k, params[k]);
        }
        return  fetch(url, options).then(
            response => response.json()
        );
    }

    list(page, limit){
        return this.query(
            `${this.options.object}`,
            {
                method: 'GET'
            },
            {
                '_page': page,
                '_limit': limit
            });
          
    }

    read(id){
        return this.query(
            `${this.options.object}/${id||''}`,
            {
                method: 'GET'
            }

        )

    }

    create(data){
        return this.query(`${this.options.object}`,
        {
            method: 'POST',
            body: JSON.stringify(data)
        });

    }

    delete(id){

        return this.query(
            `${this.options.object}/${id||''}`,
            {
                method: 'DELETE'
            }
        )
 
    }

    update(){}
}