const AlbumList = require("./AlbumList")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new AlbumList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
