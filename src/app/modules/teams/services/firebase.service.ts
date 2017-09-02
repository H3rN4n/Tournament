import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import * as Models from './../models';

export abstract class RootService {

  public collection: FirebaseListObservable<any[]> = null; //  list of objects
  public item: FirebaseObjectObservable<any> = null; //   single object

  private basePath = '';

  constructor(
    basePath,
    protected af: AngularFireModule,
    protected db: AngularFireDatabase,
  ) {
    this.basePath = basePath;
  }

  list(query = {}): FirebaseListObservable<any[]> {
    this.collection = this.db.list(this.basePath, {
      query: query
    });
    return this.collection;
  }

  // Return a single observable item
  getItem(key: string): FirebaseObjectObservable<any> {
    const itemPath = `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath);
    console.log(this.item, "ITEM")
    return this.item;
  }

  createItem(item: any) {
    this.collection.push(item)
      .catch(error => this.handleError(error));
  }

  // Update an existing item
  updateItem(key: string, value: any) {
    this.collection.update(key, value)
      .catch(error => this.handleError(error));
  }
  // Deletes a single item
  deleteItem(key: string) {
    this.collection.remove(key)
      .catch(error => this.handleError(error));
  }
  // Deletes the entire list of items
  deleteAll() {
    this.collection.remove()
      .catch(error => this.handleError(error));
    return this.collection;
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log(error);
  }

}

@Injectable()
export class TeamsService extends RootService {

  public collection: FirebaseListObservable<Models._Team[]> = null; //  list of objects
  public item: FirebaseObjectObservable<Models._Team> = null; //   single object

  constructor(
    protected af: AngularFireModule,
    protected db: AngularFireDatabase,
  ) {
    super('/teams/list', af, db);
  }
}

@Injectable()
export class PlayersService extends RootService {

  collection: FirebaseListObservable<Models._Player[]> = null; //  list of objects
  item: FirebaseObjectObservable<Models._Player> = null; //   single object

  constructor(
    protected af: AngularFireModule,
    protected db: AngularFireDatabase,
  ) {
    super('/players/list', af, db);
  }
}

@Injectable()
export class TournamentsService extends RootService {

  collection: FirebaseListObservable<Models._Tournament[]> = null; //  list of objects
  item: FirebaseObjectObservable<Models._Tournament> = null; //   single object

  constructor(
    protected af: AngularFireModule,
    protected db: AngularFireDatabase
  ) {
    super('/tournaments', af, db);
  }
}

@Injectable()
export class MatchesService extends RootService {

  collection: FirebaseListObservable<Models._Match[]> = null; //  list of objects
  item: FirebaseObjectObservable<Models._Match> = null; //   single object

  constructor(
    protected af: AngularFireModule,
    protected db: AngularFireDatabase
  ) {
    super('/matches', af, db);
  }
}
