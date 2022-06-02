function factory(lib, arr) {
    const res = [];

    for (let order of arr) {
      const object = Object.assign({}, order.template)
        // const object = {};
        // const template = order.template;

        // for (const key in template) {
        //     object[key] = template[key];
        // }
        
      
        const parts = order.parts;

        for (const part of parts) {
          object[part] = lib[part]
        }
        res.push(object);
    }

    return res

}










const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.log(products);
  