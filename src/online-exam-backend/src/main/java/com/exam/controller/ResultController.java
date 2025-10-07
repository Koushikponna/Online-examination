package com.exam.controller;

import com.exam.model.Result;
import com.exam.service.ResultService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/results")
public class ResultController {
    private final ResultService service;

    public ResultController(ResultService service) {
        this.service = service;
    }

    @GetMapping
    public List<Result> all() { return service.getAll(); }

    @PostMapping
    public Result create(@RequestBody Result result) { return service.save(result); }
}
