import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'


describe('Pruebas en el <AddCategory />', () => {

    /**
     * Jest ofrece la posibilidad de enviar esta función (jest.fn()) "vacia" que permite
     * conocer como fue llamada, si fue llamada, cuantas veces, etc.
     */
    const setCategories = jest.fn(); 
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks(); // Limpiar mocks y simulaciones que tengamos ejecutando
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    } );
    
    test('debe renderizarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    

    test('debe de cambiar la caja de texto', () => {

        const value = 'Hola Mundo';
        const input = wrapper.find('input');

        input.simulate('change', { target: { value } });
        
        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    });
    
    test('NO debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){}});

        /**
         * Si no utilizamos el beforeEach() esto ya habrá sido llamado una vez
         * gracias a la prueba anterior.
         */
        expect( setCategories ).not.toHaveBeenCalled();
        
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Kimetsu no Yaiba';
        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // 4. El valor del input debe ser ''.
        expect( wrapper.find('input').prop('value') ).toBe('');        
        
    });
    
    
    
    
    
})
