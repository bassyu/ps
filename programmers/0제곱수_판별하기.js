function solution(n) {
    let able = [];
    for (let i = 1; i <= 1000; i++) {
        able.push(i*i);
    }
    return 2 - able.includes(n);
}