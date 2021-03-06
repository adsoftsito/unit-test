import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { TodoFormComponent } from '../04-forms/todo-form.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1, 2 , 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from( [ todos ]);
    });

    component.ngOnInit();
    //expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);
  });
});