class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    let index = this._hash(key);
    this.data[index] = [String(key), value];
  }

  get(key) {
    let index = this._hash(key);
    console.log(this.data[index]);
  }

  print() {
    console.log(this.data);
  }

  _hash(key) {
    key = String(key);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.data.length;
    }
    return hash;
  }
}

let map = new HashTable(30);

map.set("test", true);
map.set("1", "testing");
map.set(5, "testing");
map.set(1, "testing again");
map.set(undefined, false);
map.print();
map.get(5);
