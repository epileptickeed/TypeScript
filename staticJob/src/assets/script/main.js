const boxes = document.querySelectorAll('.box')
const cards = document.querySelectorAll('.card')
const currentTags = document.querySelector('.current_tags')
const tags = document.querySelectorAll('.tags')
// boxes.forEach( (box) => {
//     box.addEventListener('click', (e)=>{
//         // console.log(e.target)

//         const filtered = e.target.dataset['f']
//         console.log(filtered)
//         if(!e.target.classList.contains(filtered)){
//             console.log(e.target.parentNode.parentNode)
//             cards.forEach(element => {
//                 element.classList.add('hidden')
//             });
//         }
//     })
// })


  
  

document.querySelectorAll('.tags').forEach((tag)=>{
    tag.addEventListener('click', (e)=>{
        e.preventDefault()
        if(e.target.tagName !== 'P') return false
    
        const filtered = e.target.dataset['f']

        NodeList.prototype.has = function(selector) {
            return Array.from(this).filter(e => e.querySelector(selector))
        }

        // console.log(e.target)

        switch (e.target.innerHTML){
            case `Senior`:
                cards.forEach(card=>{
                    card.classList.add('hidden')
                })
                tags
                        .has('.Senior')
                        .forEach(e => e.parentNode.classList.add('is_active'))
                currentTags.innerHTML = `Senior `
                // console.log(e.target)
            break;

            case `JavaScript`:
                cards.forEach(card=>{
                    card.classList.add('hidden')
                })
                tags
                        .has('.JavaScript')
                        .forEach(e => e.parentNode.classList.add('is_active'))
                    currentTags.innerHTML = `Javascript `
            break;
        }

        // switch(tags){
        //     case tags.has('.Senior'):
        //         tags.forEach(e=>e.parentNode.classList.add('is_active'))
        //     break;
        // }
        
        // tags.has('.Senior').forEach(e=>e.parentNode.classList.add('is_active'))
        // cards.forEach(card => card.classList.add('hidden'))

        

        // switch(filtered){
        //     case `Senior`:
        //         cards.forEach(card=>{
        //             card.classList.add('hidden')
        //         })
        //         tags
        //                 .has('.Senior')
        //                 .forEach(e => e.parentNode.classList.add('is_active'))
        //         currentTags.innerHTML = `Senior `
        //         // console.log(e.target)
        //     break;

        //     case `JavaScript`:
        //         cards.forEach(card=>{
        //             card.classList.add('hidden')
        //         })
        //         tags
        //                 .has('.JavaScript')
        //                 .forEach(e => e.parentNode.classList.add('is_active'))
        //             currentTags.innerHTML = `Javascript `
        //     break;

        //     case `TypeScript`:
        //         cards.forEach(card=>{
        //             card.classList.add('hidden')
        //         })
        //         tags
        //                 .has('.TypeScript')
        //                 .forEach(e => e.parentNode.classList.add('is_active'))
        //     break;

        //     case `Backend`:
        //         cards.forEach(card=>{
        //             card.classList.add('hidden')
        //         })
        //         tags
        //                 .has('.Backend')
        //                 .forEach(e => e.parentNode.classList.add('is_active'))
        //     break;
        // }
        
    })
})

console.log()
