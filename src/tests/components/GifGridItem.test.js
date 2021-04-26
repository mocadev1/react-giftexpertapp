import { shallow } from "enzyme"


import GifGridItem from "../../components/GifGridItem"


describe('Pruebas en <GifGridItem />', () => {

    let wrapper = shallow(<GifGridItem />);

    beforeEach( () => {
        wrapper = shallow( <GifGridItem />);
    })
    

    test('debe de renderizar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})