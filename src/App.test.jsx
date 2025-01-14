const { default: shallow } = require('zustand/shallow');
const { default: App } = require('./App');
const { VStack, Divider } = require('@chakra-ui/react');
const { Filter } = require('./components/Filter');
const { TodoList } = require('./components/TodoList');
const { TotalTodos } = require('./components/TotalTodos');
const { NewTodo } = require('./components/NewTodo');
const { render, screen } = require('@testing-library/react');

describe('App', () => {
  it('should render the NewTodo component as the fifth child of the VStack component', () => {
    render(<App />);
    const fifthChild = screen.getAllByRole('listitem')[4];
    expect(fifthChild).toBeInTheDocument();
    expect(fifthChild).toHaveTextContent('NewTodo');
  });
});