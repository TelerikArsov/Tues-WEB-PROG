var obj = JSON.parse("{\"a\": 123, \"b\": \"str\"}");
if (typeof obj == "object" && obj != null && "a" in obj) {
    console.log(obj.a);
}
