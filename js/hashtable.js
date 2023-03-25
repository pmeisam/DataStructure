class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // O(1)
  // adds a key and value in a location (hashed)
  set(key, value) {
    let index = this._hash(key);
    this.data[index] = [String(key), value];
  }

  // O(1)
  // Gets the value of the provided key (key is hashed in memory(array))
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
