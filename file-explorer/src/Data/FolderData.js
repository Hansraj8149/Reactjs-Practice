const explorer = {
    id: '1',
    name:'package',
    isFolder: true,
    items: [
        {
            id:'2',
            name:'folder2',
            isFolder:true,
            items: [
                {
                    id:'3',
                    name:'file1',
                    isFolder:false,
                    items:[]
                }
            ]
        },
        {
            id:'4',
            name:'folder3',
            isFolder:true,
            items: [
                {
                    id:'5',
                    name:"file2",
                    isFolder:false,
                    items:[],
                },
                {
                    id:'6',
                    name:"file3",
                    isFolder:false,
                    items:[],
                },
                {
                    id:'6',
                    name:"file4",
                    isFolder:false,
                    items:[],
                },
            ]
        }
    ]
}
export default explorer;