
# How to use

## Setting up
First you'll need to make a html file and give it some boilerplate. Here's an example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Now link to the downloaded library like this and put it between the body tags
```html
<script src="prinput.js"></script>
```
For your own code you should make another javascript file and link it underneath the library file, just the same way as the previous code.


## Writing code

First you'll need to make an `async` function. This will be the function your code is called from. Don't worry if you don't know what `async` is. I suggest you name this function `main`

```js
function async main(){
}

main()
```

Now just put your prints inside `main()`

```js
function async main(){
    print("hi")
}

main()
```

You can sleep as well. In javascript the measurement of time is miliseconds so you'll need to use a big number

This is an `await` function. Just put `await` in front of it.
```js
await sleep(5000)
```

You can get input by using `await input()`. You can also get the value of input, for example.
Remember to put `await` or it will not wait for input

```js
let answer = await input()
```

You can both print and get input at the same time by passing the text as a parameter.


# CSS
The default browser css is crusty but don't worry i got u fam. I made a nice css stylesheet that makes it look like a command line but a little less scary. It's what the screenshot of this library is using. It is included in the repository.

I would like to make some more stylesheets too, like one that looks "modern" and a little less "command liney" so you can have a more conventional interface while still programming in a simple way.

